export interface ITab {
	title: string;
	content: JSX.Element;
};

export interface IProps {
	tabs: ITab[];
};
