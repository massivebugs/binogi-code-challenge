import { Card } from "@/components/ui/card";

type Props = {
  className?: string;
};

export default function RecipeCardLoading({ className }: Props) {
  return (
    <Card className={`bg-slate-100 animate-pulse ${className}`}>
      <div className="w-full h-full flex justify-center items-center">
        Retrieving Recipes...
      </div>
    </Card>
  );
}
