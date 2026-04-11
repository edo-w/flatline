import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './table';

const meta: Meta<typeof Table> = {
	title: 'Table',
	component: Table,
	parameters: {
		layout: 'padded',
		controls: {
			exclude: ['use:eventListener'],
		},
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div style={{ width: '42rem', 'max-width': '100%' }}>
			<Table>
				<TableCaption>Quarterly revenue by account segment</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Segment</TableHead>
						<TableHead>Accounts</TableHead>
						<TableHead>MRR</TableHead>
						<TableHead>Trend</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Starter</TableCell>
						<TableCell>412</TableCell>
						<TableCell>$12,480</TableCell>
						<TableCell>+8%</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Growth</TableCell>
						<TableCell>128</TableCell>
						<TableCell>$24,960</TableCell>
						<TableCell>+13%</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Enterprise</TableCell>
						<TableCell>22</TableCell>
						<TableCell>$31,400</TableCell>
						<TableCell>+4%</TableCell>
					</TableRow>
				</TableBody>
				<TableFooter>
					<TableRow>
						<TableCell>Total</TableCell>
						<TableCell>562</TableCell>
						<TableCell>$68,840</TableCell>
						<TableCell>+9%</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
	),
};
