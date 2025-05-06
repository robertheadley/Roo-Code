import { useMemo } from "react"
import { formatRelative } from "date-fns"

import type { McpErrorEntry } from "@roo/shared/mcp"

type McpErrorRowProps = {
	error: McpErrorEntry
}

export const McpErrorRow = ({ error }: McpErrorRowProps) => {
	const color = useMemo(() => {
		switch (error.level) {
			case "error":
				return "var(--vscode-testing-iconFailed)"
			case "warn":
				return "var(--vscode-charts-yellow)"
			case "info":
				return "var(--vscode-testing-iconPassed)"
		}
	}, [error.level])

	return (
		<div
			className="p-2 rounded bg-vscode-textCodeBlock-background text-sm"
			style={{ borderLeft: `3px solid ${color}` }}>
			<div className="mb-1" style={{ color }}>
				{error.message}
			</div>
			<div className="text-xs text-vscode-descriptionForeground">
				{formatRelative(error.timestamp, new Date())}
			</div>
		</div>
	)
}
