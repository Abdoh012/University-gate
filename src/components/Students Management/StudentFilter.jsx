// Shadcn select
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function StudentFilter({ options, onChange }) {
  // -------------------- Component Structure --------------------
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={options[0].placeholder} />
      </SelectTrigger>
      <SelectContent>
        {/* Selection group */}
        <SelectGroup>
          {/* Label */}
          <SelectLabel>{options[0].label}</SelectLabel>

          {/* Items */}
          {options[1].map((option) => (
            <SelectItem
              className="capitalize"
              key={option.id}
              value={option.name}
            >
              {option.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
