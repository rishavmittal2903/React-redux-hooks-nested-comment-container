interface IProps extends React.HTMLProps<HTMLHeadingElement> {
  headingType: string;
}
const Heading = (props: IProps) => {
  const { headingType } = props;
  const getHeadingTag = () => {
    switch (headingType) {
      case "h1": {
        return <h1 {...props}>{props.children}</h1>;
      }
      case "h2": {
        return <h2 {...props}>{props.children}</h2>;
      }
      case "h3": {
        return <h3 {...props}>{props.children}</h3>;
      }
      case "h4": {
        return <h4 {...props}>{props.children}</h4>;
      }
      case "h5": {
        return <h5 {...props}>{props.children}</h5>;
      }
      case "h6": {
        return <h6 {...props}>{props.children}</h6>;
      }
      default: {
        return <h1 {...props}>{props.children}</h1>;
      }
    }
  };
  return getHeadingTag();
};

export default Heading;
