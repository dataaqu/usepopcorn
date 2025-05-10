//   <TextExpander>
//   Space travel is the ultimate adventure! Imagine soaring past the stars and
//   exploring new worlds. It's the stuff of dreams and science fiction, but
//   believe it or not, space travel is a real thing. Humans and robots are
//   constantly venturing out into the cosmos to uncover its secrets and push
//   the boundaries of what's possible.
// </TextExpander>

// <TextExpander
//   collapsedNumWords={20}
//   expandButtonText="Show text"
//   collapseButtonText="Collapse text"
//   buttonColor="#ff6622"
// >
//   Space travel requires some seriously amazing technology and collaboration
//   between countries, private companies, and international space
//   organizations. And while it's not always easy (or cheap), the results are
//   out of this world. Think about the first time humans stepped foot on the
//   moon or when rovers were sent to roam around on Mars.
// </TextExpander>

// <TextExpander expanded={true} className="box">
//   Space missions have given us incredible insights into our universe and
//   have inspired future generations to keep reaching for the stars. Space
//   travel is a pretty cool thing to think about. Who knows what we'll
//   discover next!
// </TextExpander>

import { useState } from "react";
import PropTypes from "prop-types";

TextExpander.prototypes = {
  children: PropTypes.string,
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  className: PropTypes.string,
  expanded: PropTypes.bool,
};

export default function TextExpander({
  children,
  collapsedNumWords = 70,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#0000FF",
  className = "",
  expanded = false,
}) {
  const [expanded1, setExpanded] = useState(expanded);

  function handleExpand(ex) {
    setExpanded((ex) => !ex);
  }

  return (
    <div className={className}>
      {expanded1 ? children : children.slice(0, collapsedNumWords) + "..."}

      <Button
        expandButtonText={expandButtonText}
        collapseButtonText={collapseButtonText}
        buttonColor={buttonColor}
        expanded1={expanded1}
        onExpand={handleExpand}
      />
    </div>
  );
}

function Button({
  expandButtonText,
  buttonColor,
  expanded1,
  collapseButtonText,
  onExpand,
}) {
  return (
    <span role="button" style={{ color: buttonColor }} onClick={onExpand}>
      {expanded1 ? collapseButtonText : expandButtonText}
    </span>
  );
}
