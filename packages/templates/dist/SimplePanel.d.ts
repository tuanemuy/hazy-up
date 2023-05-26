/// <reference types="react" />
type Props = {
    name: string;
    description: string;
    reverse: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const props: {
    type: string;
    key: string;
    name: string;
}[];
export declare const Template: ({ name, description, reverse, className }: Props) => import("react/jsx-runtime").JSX.Element;
export declare const styles: {
    base: string;
    lg: string;
};
export declare const defaultProps: {
    name: string;
    description: string;
    reverse: boolean;
};
export declare const description = "\u63A8\u5968\u8868\u793A\u30B5\u30A4\u30BA\u306E\u8AAC\u660E\u7B49";
export {};
//# sourceMappingURL=SimplePanel.d.ts.map