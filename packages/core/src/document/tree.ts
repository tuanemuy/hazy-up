import { NodeID, Node, Role } from "./node";

export type GenerateTreeArgs = {
  role: Role;
  children: Tree[];
};

export class Tree {
  constructor(public readonly role: Role, public readonly children: Tree[]) {}

  static generate({ role, children }: GenerateTreeArgs): Tree {
    return new Tree(role, children);
  }

  toNodeMap(rootId: NodeID): { [key: NodeID]: Node } {
    const nodes = this.toNodes(rootId, null, null, null);
    const map: { [key: NodeID]: Node } = {};
    for (const node of nodes) {
      map[node.id] = node;
    }
    return map;
  }

  toNodes(
    id: NodeID,
    parentId: NodeID | null,
    prev: NodeID | null,
    next: NodeID | null
  ): Node[] {
    const childIds = Array(this.children.length)
      .fill(0)
      .map((_v) => Node.generateId());
    return [
      Node.generate({
        id,
        parentId,
        prev,
        next,
        firstChild: childIds[0],
        lastChild: childIds.slice(-1)[0],
        role: this.role,
      }),
      ...this.children
        .map((child, index) => {
          return child.toNodes(
            childIds[index],
            id,
            childIds[index - 1] || null,
            childIds[index + 1] || null
          );
        })
        .flat(),
    ];
  }
}
