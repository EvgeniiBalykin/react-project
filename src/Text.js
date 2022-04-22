import './App.css';

function Text({text, textColor, fontSize, textDecoration}) {

  let textUnderline = textDecoration ? 'underline' : 'none';

  const styles = {
    color: textColor,
    fontSize: fontSize,
    textDecoration: textUnderline
  }

  return <div style={styles}>{text}</div>
}

export default Text;
