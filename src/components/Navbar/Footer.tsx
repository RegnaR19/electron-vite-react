// страница footer
import { Grid, Col } from '@mantine/core';
import Quote from '../Forms/Quote';

export default function FooterOne() {
   return (
      <Grid justify="flex-start" align="center">
         <Grid.Col span="content">
            <Quote />
         </Grid.Col>
      </Grid>
   );
}