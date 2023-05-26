import { nanoid } from "nanoid";

export type NodeID = string;

export type NodeMap = { [key: NodeID]: Node };

export type GenerateNodeArgs = {
  id: NodeID;
  parentId?: NodeID | null;
  firstChild?: NodeID | null;
  lastChild?: NodeID | null;
  prev?: NodeID | null;
  next?: NodeID | null;
  role: Role;
};

export class Node {
  constructor(
    public readonly id: NodeID,
    public readonly parentId: NodeID | null,
    public readonly firstChild: NodeID | null,
    public readonly lastChild: NodeID | null,
    public readonly prev: NodeID | null,
    public readonly next: NodeID | null,
    public readonly role: Role
  ) {}

  static generateId(): NodeID {
    return nanoid();
  }

  static generate({
    id,
    parentId,
    firstChild,
    lastChild,
    prev,
    next,
    role,
  }: GenerateNodeArgs) {
    return new Node(
      id,
      parentId || null,
      firstChild || null,
      lastChild || null,
      prev || null,
      next || null,
      role
    );
  }

  getChildren(nodeMap: NodeMap): Node[] {
    let children = [];
    let next = this.firstChild;
    while (next !== null) {
      children.push(nodeMap[next]);
      next = nodeMap[next].next;
    }

    return children;
  }
}

export interface Role {
  attributes: { [key: string]: any };
}
