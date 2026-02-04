import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

type Props = {
  name: string
  price: number
  category: "electronics" | "clothing"
}

export default function ProductCard({ name, price, category }: Props) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold tracking-tight">
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <p className="text-2xl font-semibold text-gray-800">
          ${price.toFixed(2)}
        </p>

        <span
          className={
            category === "electronics"
              ? "inline-block px-4 py-1 rounded-full bg-blue-600 text-white text-sm capitalize"
              : "inline-block px-4 py-1 rounded-full bg-gray-200 text-gray-800 text-sm capitalize"
          }
        >
          {category}
        </span>
      </CardContent>
    </Card>
  )
}
