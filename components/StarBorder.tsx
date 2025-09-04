import React from "react"
import "./StarBorder.css"

type StarBorderProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children?: React.ReactNode
  color?: string
  speed?: React.CSSProperties["animationDuration"]
  thickness?: number
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "color" | "children">

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button"

  return (
    <Component
      className={`star-border-container ${className}`}
      {...rest}
      style={{
        padding: `${thickness}px 0`,
        ...style, // ✅ use style prop directly, no `any`
      }}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  )
}

export default StarBorder
