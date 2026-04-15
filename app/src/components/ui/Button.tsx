import Link from "next/link";

type ButtonBaseProps = {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles = {
  primary:
    "bg-accent text-primary-dark hover:bg-accent-dark font-bold",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-cream font-bold",
} as const;

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-[44px] items-center justify-center rounded px-6 py-3 text-sm uppercase tracking-wider transition-colors";
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={styles}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
