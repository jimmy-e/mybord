import * as React from 'react';
import PopOverAnimation from 'framerMotion/popOverAnimationTwo';
import Portal from 'shared/portal/portal';
import { PopOverProps, PopOverStyleTwo } from 'types/modalTypes';
import PopOverCaret from './popOverCaret/popOverCaret';
import getPopOverStyle from './getPopOverStyle';

interface Props extends PopOverProps {
  Content: React.ReactNode;
}

const PopOver: React.FC<Props> = ({
  Content,
  caretPlacement = null,
  children,
  defaultVisible = false,
  placement = 'bottom-center',
  trigger = 'click',
}) => {
  const [childrenRef, setChildrenRef] = React.useState<HTMLElement>(null);
  const [popOverStyle, setPopOverStyle] = React.useState<PopOverStyleTwo>(null);
  const [showPopOver, setShowPopOver] = React.useState<boolean>(defaultVisible);
  const popOverRef = React.useRef<HTMLDivElement>(null);
  const newChildren = React.cloneElement(
    children,
    { ref: (node: HTMLElement) => setChildrenRef(node) },
  );

  // ----- CLICK & HOVER EVENT LISTENERS ----- //
  // adds a click or hover event listener to conditionally display the popover

  React.useEffect(() => {
    const childrenNode = childrenRef;
    const popOverNode = popOverRef.current;

    const handleEvent = (event: Event): void => {
      if (
        !showPopOver
        && childrenNode
        && childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(true);
      }

      if (
        showPopOver
        && trigger === 'click'
        && childrenNode
        && childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(false);
      }

      if (
        showPopOver
        && popOverNode
        && !popOverNode.contains(event.target as Node)
        && childrenNode
        && !childrenNode.contains(event.target as Node)
      ) {
        setShowPopOver(false);
      }
    };

    if (trigger === 'click') {
      document.addEventListener('mousedown', handleEvent);
    }

    if (trigger === 'hover') {
      document.addEventListener('mouseover', handleEvent);
    }

    return () => {
      if (trigger === 'click') {
        document.removeEventListener('mousedown', handleEvent);
      }

      if (trigger === 'hover') {
        document.removeEventListener('mouseover', handleEvent);
      }
    };
  }, [
    childrenRef,
    popOverRef,
    showPopOver,
    setShowPopOver,
    trigger,
  ]);

  // ----- POPOVER STYLE  ----- //
  // sets the style and positioning of the popover, and updates said style and positioning if
  // the window gets resized.

  React.useEffect(() => {
    const getStyle = (): void => getPopOverStyle(
      caretPlacement,
      childrenRef,
      placement,
      popOverRef,
      setPopOverStyle,
    );

    getStyle();

    window.addEventListener('resize', getStyle);

    return () => {
      window.removeEventListener('resize', getStyle);
    };
  }, [caretPlacement, childrenRef, placement, popOverRef, showPopOver]);

  // ----- RETURNS COMPONENT ----- //

  return (
    <>
      {newChildren}
      <Portal>
        <PopOverAnimation
          popOverStyle={popOverStyle}
          ref={popOverRef}
          showPopOver={showPopOver}
        >
          {
            caretPlacement && (
              <PopOverCaret caretPlacement={caretPlacement} popOverPlacement={placement} />
            )
          }
          {Content}
        </PopOverAnimation>
      </Portal>
    </>
  );
};

export default PopOver;
