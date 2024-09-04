import clsx from 'clsx';

/**
 * @param {{
 *  children: any,
 *  className: string,
 *  size: big | md | small,
 *  variant: basic | outlined
 * }} props
 */

function UiButton({ className, children, size, variant }) {
  const buttonClassName = clsx(
    'transition-colors shadow-sm',
    className,
    {
      big: 'py-2 px-6 rounded-lg text-xl',
      md: 'py-2 px-6 rounded-lg text-sm',
      small: '',
    }[size],
    {
      basic: 'bg-teal-600 text-white hover:bg-teal-500',
      outlined: 'border-teal-600 border hover:bg-teal-50',
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}

export { UiButton };
