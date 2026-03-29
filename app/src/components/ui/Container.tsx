type ContainerProps<T extends React.ElementType = "div"> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

export default function Container<T extends React.ElementType = "div">({
  as,
  className = "",
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={`mx-auto max-w-7xl px-5 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}
