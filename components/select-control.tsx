"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectOption } from "@/types"

type Props = {
  selectLabel: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  groupLabel: string
  placeholder: string
}

export default function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  groupLabel,
  placeholder,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-lg font-medium text-gray-800">{selectLabel}</span>

      <Select value={value} onValueChange={onValueChange}>
<SelectTrigger className="w-[230px] h-12 bg-white text-lg text-gray-900 border border-gray-300 shadow-sm rounded-xl">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>{groupLabel}</SelectLabel>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
