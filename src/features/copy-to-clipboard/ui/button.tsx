import { Button, ShareIcon } from '@/shared/ui'

interface Props {
  textToCopy: string
};

export const CopyToClipboardButton = ({ textToCopy }: Props) => {
  const handleShareClick = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      alert(`${textToCopy} copied to clipboard!`);
    } catch (error) {
      alert('Failed to copy the text. Please try again.');
    }
  };

  return (
    <Button icon onClick={handleShareClick}>
      <ShareIcon />
    </Button>
  );
};
