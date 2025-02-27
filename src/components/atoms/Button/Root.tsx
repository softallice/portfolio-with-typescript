import {
  ActionIcon,
  ActionIconProps,
  Button,
  ButtonProps,
  createPolymorphicComponent
} from '@mantine/core';
import { ComponentPropsWithRef, forwardRef } from 'react';

type ButtonAtomOwnProps = ComponentPropsWithRef<'button'> & {
  isIconOnly?: boolean;
};

type ButtonAtomProps = ButtonAtomOwnProps &
  Omit<ButtonProps, keyof ButtonAtomOwnProps>;

const ButtonAtom = (
  { style, isIconOnly, ...props }: ButtonAtomProps,
  ref: ButtonAtomProps['ref']
) => {
  if (isIconOnly)
    return (
      <ActionIcon
        ref={ref}
        style={{
          '--button-bg': 'var(--ai-bg)',
          '--button-bd': 'var(--ai-bd)',
          '--button-color': 'var(--ai-color)',
          '--button-height': 'var(--ai-size)',
          '--button-hover': 'var(--ai-hover)',
          ...style
        }}
        {...(props as Omit<ActionIconProps, keyof ButtonAtomOwnProps>)}
      />
    );

  return (
    <Button
      ref={ref}
      style={style}
      {...(props as Omit<ButtonProps, keyof ButtonAtomOwnProps>)}
    />
  );
};

export default createPolymorphicComponent<'button', ButtonAtomProps>(
  forwardRef(ButtonAtom)
);
export type { ButtonAtomProps };
