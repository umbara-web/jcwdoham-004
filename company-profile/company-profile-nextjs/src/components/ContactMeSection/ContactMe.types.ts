type ModalVariant = {
  title: string;
  sub: string;
  src: string;
  id: string;
  alt: string;
};

type NotificationProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
  isSuccess: boolean;
};

export type { ModalVariant, NotificationProps };
