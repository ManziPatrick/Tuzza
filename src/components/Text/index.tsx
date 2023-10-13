import React from "react";

const sizeClasses = {
  txtWorkSansRomanExtraBold49: "font-extrabold font-worksans",
  txtWorkSansBold20Black900: "font-bold font-worksans",
  txtWorkSansRomanBold24: "font-bold font-worksans",
  txtWorkSansItalicExtraBold48: "font-extrabold font-worksans italic",
  txtWorkSansRegular49: "font-normal font-worksans",
  txtRobotoItalicCondensedBold48: "font-bold font-roboto italic",
  txtWorkSansRegular24: "font-normal font-worksans",
  txtRobotoRomanExtraBold48: "font-extrabold font-roboto",
  txtWorkSansBold20Teal600: "font-bold font-worksans",
  txtWorkSansBold20: "font-bold font-worksans",
  txtWorkSansRomanBold32: "font-bold font-worksans",
  txtWorkSansRomanRegular30: "font-normal font-worksans",
  txtInterRegular24: "font-inter font-normal",
  txtRobotoRomanRegular20: "font-normal font-roboto",
  txtWorkSansBold48: "font-bold font-worksans",
  txtWorkSansRomanBold40: "font-bold font-worksans",
  txtRobotoRomanSemiBold20: "font-roboto font-semibold",
  txtRobotoRomanLight20: "font-light font-roboto",
  txtWorkSansRomanRegular24: "font-normal font-worksans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
