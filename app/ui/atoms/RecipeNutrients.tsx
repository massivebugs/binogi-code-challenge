import { ScrollArea } from "@/components/ui/scroll-area";
import { components } from "@/lib/edamam/interfaces";

type Props = {
  nutrients: components["schemas"]["NutrientsInfo"];
  className?: string;
};

export default function RecipeNutrients({ nutrients, className }: Props) {
  return (
    <ScrollArea className={`rounded-md border p-4 ${className}`}>
      <ul>
        {Object.keys(nutrients).map((key) => (
          <li key={key} className="text-xs">
            {nutrients[key] &&
              `${nutrients[key].label}: ${Math.round(
                nutrients[key].quantity ?? 0
              )}${nutrients[key].unit}`}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}
