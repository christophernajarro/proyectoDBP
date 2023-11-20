import React from 'react';
import { styled } from '@mui/material/styles';
import SampleCard from '../SampleCard/SampleCard';
import useSampleCardGrid from './useSampleCardGrid';

const SampleCardGrid1 = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  borderRadius: `0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `10px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
  height: 'auto',
});

const Grid = styled('div')({
  borderRadius: `0px`,
  display: `grid`,
  position: `relative`,
  isolation: `isolate`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
  height: `auto`,
  gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
  columnGap: `30px`,
  rowGap: `30px`,
  width: `100%`,
});

const SampleCard1 = styled(SampleCard)(({ theme }) => ({
  flex: `1`,
  margin: `0px`,
}));

function SampleCardGrid(props) {
  const { data } = useSampleCardGrid();

  return (
    <SampleCardGrid1 className={props.className}>
      <Grid>
        {data.items &&
          data.items.map((item, index) => {
            return <SampleCard1 key={index} />;
          })}
      </Grid>
    </SampleCardGrid1>
  );
}

export default SampleCardGrid;
