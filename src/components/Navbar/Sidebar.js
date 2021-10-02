import * as React from 'react';
import { useState, useCallback, useRef, useEffect } from "react";
import List from '@mui/material/List';
import BookIcon from '@mui/icons-material/Book';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import Navlists from './Navlists';
import './navbarstyle.css'
import './navliststyle.css'
const SCROLL_BOX_MIN_HEIGHT = 350;

export default function NestedList() {
    const [hovering, setHovering] = useState(false);
    const scrollHostRef = useRef();
    const [scrollBoxHeight, setScrollBoxHeight] = useState(SCROLL_BOX_MIN_HEIGHT);
    const [scrollBoxTop, setScrollBoxTop] = useState(0);
    const [lastScrollThumbPosition, setScrollThumbPosition] = useState(0);
  const [isDragging, setDragging] = useState(false);
    const handleScroll = useCallback(() => {
        if (!scrollHostRef) {
          return;
        }
        const scrollHostElement = scrollHostRef.current;
        const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement;
    
        let newTop =
          (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight;
        // console.log(newTop, scrollBoxHeight, scrollTop, scrollHeight, offsetHeight);
    
        // console.log(offsetHeight - scrollBoxHeight);
        // newTop = newTop + parseInt(scrollTop, 10);
        newTop = Math.min(newTop, offsetHeight - scrollBoxHeight);
        setScrollBoxTop(newTop);
      }, [scrollBoxHeight]);
      const handleDocumentMouseUp = useCallback(
        e => {
          if (isDragging) {
            e.preventDefault();
            setDragging(false);
          }
        },
        [isDragging]
      );
      const handleDocumentMouseMove = useCallback(
        e => {
          if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            const scrollHostElement = scrollHostRef.current;
            const { scrollHeight, offsetHeight } = scrollHostElement;
    
            let deltaY = e.clientY - lastScrollThumbPosition;
            let percentage = deltaY * (scrollHeight / offsetHeight);
    
            setScrollThumbPosition(e.clientY);
            setScrollBoxTop(
              Math.min(
                Math.max(0, scrollBoxTop + deltaY),
                offsetHeight - scrollBoxHeight
              )
            );
            scrollHostElement.scrollTop = Math.min(
              scrollHostElement.scrollTop + percentage,
              scrollHeight - offsetHeight
            );
          }
        },
        [isDragging, lastScrollThumbPosition, scrollBoxHeight, scrollBoxTop]
      );
      const handleScrollThumbMouseDown = useCallback(e => {
        e.preventDefault();
        e.stopPropagation();
        setScrollThumbPosition(e.clientY);
        setDragging(true);
        // console.log("handleScrollThumbMouseDown");
      }, []);

      useEffect(() => {
        //this is handle the dragging on scroll-thumb
        document.addEventListener("mousemove", handleDocumentMouseMove);
        document.addEventListener("mouseup", handleDocumentMouseUp);
        document.addEventListener("mouseleave", handleDocumentMouseUp);
        return function cleanup() {
          document.removeEventListener("mousemove", handleDocumentMouseMove);
          document.removeEventListener("mouseup", handleDocumentMouseUp);
          document.removeEventListener("mouseleave", handleDocumentMouseUp);
        };
      }, [handleDocumentMouseMove, handleDocumentMouseUp]);

      useEffect(() => {
        const scrollHostElement = scrollHostRef.current;
        const { clientHeight, scrollHeight } = scrollHostElement;
        const scrollBoxPercentage = clientHeight / scrollHeight;
        const scrollbarHeight = Math.max(
          scrollBoxPercentage * clientHeight,
          SCROLL_BOX_MIN_HEIGHT
        );
        // setScrollBoxHeight(scrollbarHeight);
        scrollHostElement.addEventListener("scroll", handleScroll, true);
        return function cleanup() {
          scrollHostElement.removeEventListener("scroll", handleScroll, true);
        };
      }, [handleScroll]);
    
    const handleMouseOver = useCallback(() => {
        setHovering(true);
    }, []);
    const handleMouseOut = useCallback(() => {
        setHovering(false);
    }, []);

    return (
        <div className={"scrollhost-container"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <div style={{ height: '100vh', overflow: 'auto' }} className='scrollhost' ref={scrollHostRef}>
                <List
                    sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
                    component="nav"
                >
                    <Navlists />
                    <Divider />
                    <ListItemButton className='nav-list-container'>
                        <ListItemIcon className='nav-icon-container'>
                            <BookIcon className='nav-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography className='nav-header-text' primary="Blogs" />
                    </ListItemButton>
                    <Divider />
                    <ListItemButton   className='nav-list-container' >
                        <ListItemIcon className='nav-icon-container'>
                            <MiscellaneousServicesIcon className='nav-icon'/>
                        </ListItemIcon>
                        <ListItemText disableTypography className='nav-header-text' primary="Others" />
                    </ListItemButton>
                    <Divider />
                </List>
            </div>
            <div className={"scroll-bar"} style={{ opacity: hovering ? 1 : 0 }}>
                <div
                    className={"scroll-thumb"}
                    style={{ height: scrollBoxHeight, top: scrollBoxTop }}
                    onMouseDown={handleScrollThumbMouseDown}
                />
            </div>
        </div>
    );
}
