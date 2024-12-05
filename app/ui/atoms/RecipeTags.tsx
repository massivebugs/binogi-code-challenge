import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  tags: string[];
  className?: string;
};

export default function RecipeTags({ tags, className }: Props) {
  return (
    <ScrollArea className={`${className}`}>
      {tags.map((v) => (
        <span className="text-xs mr-1" key={v}>
          #{v}
        </span>
      ))}
    </ScrollArea>
  );
}
