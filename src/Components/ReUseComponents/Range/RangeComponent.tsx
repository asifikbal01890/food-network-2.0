import React from 'react';
import { Range, getTrackBackground } from 'react-range';

const RangeComponent = ({values, setValues}:any) => {
    return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          // margin: "2em"
        }}
      >
        <Range
          values={values}
          step={1}
          min={0}
          max={40}
          onChange={(newValues) => setValues(newValues)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "3px",
                  width: "100%",
                  borderRadius: "10px",
                  background: getTrackBackground({
                    values,
                    colors: ["#E55527", "#ccc"],
                    min: 0,
                    max: 40
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "10px",
                width: "10px",
                borderRadius: "100px",
                backgroundColor: "#E55527",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            ></div>
          )}
        />
      </div>
    );
};

export default RangeComponent;