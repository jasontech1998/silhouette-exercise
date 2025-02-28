import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const summary = [
  {
    name: "Living Room",
    value: "98.7% optimal",
    expected: "92.0% optimal",
    energy: "14.3 kWh",
    performance: "+6.7%",
    responsiveness: "+8.2%",
    adaptation: "+5.4%",
    bgColor: "bg-gray-700",
    changeType: "positive",
  },
  {
    name: "Home Office",
    value: "97.3% optimal",
    expected: "91.5% optimal",
    energy: "12.8 kWh",
    performance: "+5.8%",
    responsiveness: "+7.1%",
    adaptation: "+4.3%",
    bgColor: "bg-gray-500",
    changeType: "positive",
  },
  {
    name: "Kitchen",
    value: "85.2% optimal",
    expected: "90.1% optimal",
    energy: "18.9 kWh",
    performance: "-4.9%",
    responsiveness: "-2.1%",
    adaptation: "-6.8%",
    bgColor: "bg-gray-400",
    changeType: "negative",
  },
]

export default function EnvironmentPerformance() {
  return (
    <div className="h-150 shrink-0 overflow-hidden [mask-image:radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Environment Optimization</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          93.7% efficiency
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-gray-700">+5.2% optimization</span>{" "}
          <span className="font-normal text-gray-500">Past 30 days</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />

        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Space</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Performance
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Baseline
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Energy Used
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Efficiency
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Responsiveness
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Adaptation
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.expected}</TableCell>
                  <TableCell className="text-right">{item.energy}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-gray-700"
                          : "text-gray-400"
                      }
                    >
                      {item.performance}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-gray-700"
                          : "text-gray-400"
                      }
                    >
                      {item.responsiveness}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-gray-700"
                          : "text-gray-400"
                      }
                    >
                      {item.adaptation}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
