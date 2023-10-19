export interface ElementProps {
  label: string;
  primary: boolean;
  disabled: boolean;
  rounded: string;
  width: string;
  height: string;
  click: () => void;
}

export const createElement = ({ label, primary, disabled, rounded, width, height, click }: ElementProps) => {
  const btn = document.createElement('fab-button');
  btn.setAttribute('label', label);
  btn.setAttribute('rounded', rounded);
  btn.setAttribute('primary', `${primary}`);
  btn.setAttribute('disabled', `${disabled}`);
  btn.setAttribute('height', height);
  btn.setAttribute('width', width);
  if (!disabled) {
    btn.addEventListener('click', click);
  }
  return btn;
};
