import { ReactNode, createContext, useContext, useState } from "react";
import {
  Responsive,
  NodeID,
  Node,
  NodeMap,
  Page,
  Section,
  Columns,
  Component,
  ComponentAttributes,
} from "@/document";

export type EditorState = {
  rootId: NodeID;
  history: NodeMap[];
  setHistory: React.Dispatch<React.SetStateAction<NodeMap[]>>;
  nodeMap: NodeMap;
  historyPointer: number;
  rootNode: Node | null;
  focusedId: NodeID | null;
  focusedNode: Node | null;
  setFocusedId: React.Dispatch<React.SetStateAction<NodeID>>;
  focus: (id: NodeID) => void;
  updateNodeMap: (newNodeMap: NodeMap) => void;
  updateNode: (nodeId: NodeID, newNode: Node) => void;
  updateNodeTemporarily: (nodeId: NodeID, newNode: Node) => void;
  setDraftNodeMap: (nodeMap: NodeMap | null) => void;
  undo: () => void;
  redo: () => void;
  addSection: () => void;
  addColumns: () => void;
  addComponent: (args: ComponentAttributes) => void;
  moveBack: () => void;
  moveForward: () => void;
  removeFocused: () => void;
};

export const EditorStateContext = createContext<EditorState>(null as any);

export function useEditorState(
  initialNodeMap: NodeMap,
  rootId: NodeID,
  onUpdate: (nodeMap: NodeMap) => void
): EditorState {
  const [history, setHistory] = useState<NodeMap[]>([initialNodeMap]);
  const [historyPointer, setHistoryPointer] = useState<number>(0);

  const [draftNodeMap, setDraftNodeMap] = useState<NodeMap | null>(null);
  const nodeMap = draftNodeMap || history[historyPointer] || {};
  const [focusedId, setFocusedId] = useState<NodeID>(rootId);

  const rootNode =
    nodeMap[rootId]?.role instanceof Page ? nodeMap[rootId] : null;

  const getParents: (id: NodeID) => Node[] = (id: NodeID) => {
    const node = nodeMap[id];
    if (!node?.parentId) {
      return [node];
    } else {
      return [...getParents(node.parentId), node];
    }
  };

  const focus = (id: NodeID) => {
    setDraftNodeMap(null);
    const requestStack = getParents(id);
    const focusedStack = getParents(focusedId);

    for (let i = 0; i < requestStack.length; i++) {
      if (!focusedStack[i] || requestStack[i].id !== focusedStack[i].id) {
        setFocusedId(requestStack[i].id);
        return;
      }
    }
    setFocusedId(id);
  };

  const undo = () => {
    if (historyPointer < history.length - 1) {
      setHistoryPointer((v) => v + 1);
    }
  };

  const redo = () => {
    if (historyPointer > 0) {
      setHistoryPointer((v) => v - 1);
    }
  };

  const getAdded = (map: NodeMap, targetId: NodeID, node: Node) => {
    const targetNode = map[targetId];
    if (!targetNode) {
      return map;
    }

    if (node.role instanceof Page || targetNode.role instanceof Component) {
      return map;
    }

    if (node.role instanceof Section && !(targetNode.role instanceof Page)) {
      return map;
    }

    if (node.role instanceof Columns && targetNode.role instanceof Page) {
      return map;
    }

    if (
      node.role instanceof Component &&
      !(targetNode.role instanceof Columns)
    ) {
      return map;
    }

    const lastChildId = targetNode.lastChild;
    const newNodeMap = { ...map };
    if (lastChildId !== null && map[lastChildId]) {
      newNodeMap[targetId] = Node.generate({
        ...targetNode,
        lastChild: node.id,
      });

      newNodeMap[lastChildId] = Node.generate({
        ...map[lastChildId],
        next: node.id,
      });
    } else {
      newNodeMap[targetId] = Node.generate({
        ...targetNode,
        firstChild: node.id,
        lastChild: node.id,
      });
    }
    newNodeMap[node.id] = node;

    return newNodeMap;
  };

  const updateNodeMap = (newNodeMap: NodeMap) => {
    setDraftNodeMap(null);
    setHistory((v) => [newNodeMap, ...v.slice(historyPointer)]);
    setHistoryPointer(0);
    onUpdate(newNodeMap);
  };

  const updateNode = (nodeId: NodeID, newNode: Node) => {
    const newNodeMap = { ...nodeMap };
    newNodeMap[nodeId] = newNode;
    updateNodeMap(newNodeMap);
  };

  const updateNodeTemporarily = (nodeId: NodeID, newNode: Node) => {
    const newNodeMap = { ...nodeMap };
    newNodeMap[nodeId] = newNode;
    setDraftNodeMap(newNodeMap);
  };

  const addSection = () => {
    const sectionId = Node.generateId();
    let newNodeMap = getAdded(
      nodeMap,
      rootId,
      Node.generate({
        id: sectionId,
        parentId: rootId,
        prev: nodeMap[rootId].lastChild,
        role: Section.generateDefault(),
      })
    );

    const columnsId = Node.generateId();
    newNodeMap = getAdded(
      newNodeMap,
      sectionId,
      Node.generate({
        id: columnsId,
        parentId: sectionId,
        role: Columns.generate({
          spacing: new Responsive([0]),
          gap: new Responsive([1]),
          justifyContent: "stretch",
          alignItems: "stretch",
          repeat: new Responsive([-1]),
          flexWrap: true,
        }),
      })
    );

    updateNodeMap(newNodeMap);
  };

  const addColumns = () => {
    const focusedNode = nodeMap[focusedId];

    if (focusedNode) {
      const columnsId = Node.generateId();
      const newNodeMap = getAdded(
        nodeMap,
        focusedId,
        Node.generate({
          id: columnsId,
          parentId: focusedId,
          prev: focusedNode.lastChild,
          role: Columns.generateDefault(),
        })
      );

      updateNodeMap(newNodeMap);
    }
  };

  const addComponent = (args: ComponentAttributes) => {
    const focusedNode = nodeMap[focusedId];

    if (focusedNode) {
      const componentId = Node.generateId();
      const newNodeMap = getAdded(
        nodeMap,
        focusedNode.id,
        Node.generate({
          id: componentId,
          parentId: focusedNode.id,
          prev: focusedNode.lastChild,
          role: Component.generate(args),
        })
      );

      updateNodeMap(newNodeMap);
    }
  };

  const moveBack = () => {
    const focusedNode = nodeMap[focusedId];

    if (!focusedNode || focusedNode.prev === null) {
      return;
    }

    const prevNode = nodeMap[focusedNode.prev];
    const newNodeMap = { ...nodeMap };

    newNodeMap[focusedNode.id] = Node.generate({
      ...focusedNode,
      prev: prevNode.prev,
      next: prevNode.id,
    });

    newNodeMap[focusedNode.prev] = Node.generate({
      ...prevNode,
      prev: focusedNode.id,
      next: focusedNode.next,
    });

    if (focusedNode.next) {
      const nextNode = nodeMap[focusedNode.next];
      newNodeMap[focusedNode.next] = Node.generate({
        ...nextNode,
        prev: prevNode.id,
      });
    }

    if (prevNode.prev) {
      const prevPrevNode = nodeMap[prevNode.prev];
      newNodeMap[prevNode.prev] = Node.generate({
        ...prevPrevNode,
        next: focusedNode.id,
      });
    }

    if (focusedNode.parentId) {
      const parentNode = nodeMap[focusedNode.parentId];

      if (parentNode.firstChild === prevNode.id) {
        newNodeMap[focusedNode.parentId] = Node.generate({
          ...parentNode,
          firstChild:
            parentNode.firstChild === prevNode.id
              ? focusedNode.id
              : parentNode.firstChild,
          lastChild:
            parentNode.lastChild === focusedNode.id
              ? prevNode.id
              : parentNode.lastChild,
        });
      }
    }

    updateNodeMap(newNodeMap);
  };

  const moveForward = () => {
    const focusedNode = nodeMap[focusedId];

    if (!focusedNode || focusedNode.next === null) {
      return;
    }

    const nextNode = nodeMap[focusedNode.next];
    const newNodeMap = { ...nodeMap };

    newNodeMap[focusedNode.id] = Node.generate({
      ...focusedNode,
      prev: nextNode.id,
      next: nextNode.next,
    });

    newNodeMap[focusedNode.next] = Node.generate({
      ...nextNode,
      prev: focusedNode.prev,
      next: focusedNode.id,
    });

    if (focusedNode.prev) {
      const prevNode = nodeMap[focusedNode.prev];
      newNodeMap[focusedNode.prev] = Node.generate({
        ...prevNode,
        next: nextNode.id,
      });
    }

    if (nextNode.next) {
      const nextNextNode = nodeMap[nextNode.next];
      newNodeMap[nextNode.next] = Node.generate({
        ...nextNextNode,
        prev: focusedNode.id,
      });
    }

    if (focusedNode.parentId) {
      const parentNode = nodeMap[focusedNode.parentId];

      newNodeMap[focusedNode.parentId] = Node.generate({
        ...parentNode,
        firstChild:
          parentNode.firstChild === focusedNode.id
            ? nextNode.id
            : parentNode.firstChild,
        lastChild:
          parentNode.lastChild === nextNode.id
            ? focusedNode.id
            : parentNode.lastChild,
      });
    }

    updateNodeMap(newNodeMap);
  };

  const removeFocused = () => {
    const focusedNode = nodeMap[focusedId];
    if (!focusedNode) {
      return;
    }

    const prevNode = focusedNode.prev ? nodeMap[focusedNode.prev] : null;
    const nextNode = focusedNode.next ? nodeMap[focusedNode.next] : null;
    const parentNode = focusedNode.parentId
      ? nodeMap[focusedNode.parentId]
      : null;
    const newNodeMap = { ...nodeMap };

    if (prevNode) {
      newNodeMap[prevNode.id] = Node.generate({
        ...prevNode,
        next: focusedNode.next,
      });
    }

    if (nextNode) {
      newNodeMap[nextNode.id] = Node.generate({
        ...nextNode,
        prev: focusedNode.prev,
      });
    }

    if (parentNode) {
      newNodeMap[parentNode.id] = Node.generate({
        ...parentNode,
        firstChild:
          parentNode.firstChild === focusedNode.id
            ? focusedNode.next
            : parentNode.firstChild,
        lastChild:
          parentNode.lastChild === focusedNode.id
            ? focusedNode.prev
            : parentNode.lastChild,
      });
    }

    delete newNodeMap[focusedNode.id];

    updateNodeMap(newNodeMap);
    setFocusedId(rootId);
  };

  return {
    rootId,
    history,
    setHistory,
    historyPointer,
    rootNode,
    nodeMap,
    focusedId,
    focusedNode: nodeMap[focusedId],
    setFocusedId,
    focus,
    updateNodeMap,
    updateNode,
    updateNodeTemporarily,
    setDraftNodeMap,
    undo,
    redo,
    addSection,
    addColumns,
    addComponent,
    moveBack,
    moveForward,
    removeFocused,
  };
}

type EditorStateContextProviderProps = {
  initialNodeMap: NodeMap;
  rootId: NodeID;
  onUpdate: (nodeMap: NodeMap) => void;
  children: ReactNode;
};

export function EditorStateContextProvider({
  initialNodeMap,
  rootId,
  onUpdate,
  children,
}: EditorStateContextProviderProps) {
  const editorState = useEditorState(initialNodeMap, rootId, onUpdate);

  return (
    <EditorStateContext.Provider value={editorState}>
      {children}
    </EditorStateContext.Provider>
  );
}

export function useEditorStateContext() {
  return useContext(EditorStateContext);
}
