import {
  ArrowRightAltSharp,
  BadgeSharp,
  CabinSharp,
  CorporateFareSharp,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Container,
  Button,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { ReactElement } from "react";
import { NextLinkComposed } from "../common/Link";

interface CardContent {
  icon: ReactElement;
  heading: string;
  subHeading: string;
  services?: string[];
}

interface ServicesSectionProps {
  isMediumScreen: boolean;
  cardContent: CardContent[];
  includeCardActions?: boolean;
}

const ServicesSection = ({
  isMediumScreen,
  cardContent,
  includeCardActions = false,
}: ServicesSectionProps) => {
  return (
    <Grid container wrap={isMediumScreen ? "wrap" : "nowrap"} spacing={2}>
      {cardContent.map(({ icon, heading, subHeading, services }) => (
        <Grid item xs={12} md={4} sx={{ display: "flex" }} key={heading}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              {icon}
              <Typography variant="h6">{heading}</Typography>
              <Typography>{subHeading}</Typography>
              {services ? (
                <>
                  <Divider sx={{ pt: 1 }} />
                  {services.map((service, i) => (
                    <List dense key={i}>
                      <ListItem disableGutters>
                        <ListItemText>{service}</ListItemText>
                      </ListItem>
                    </List>
                  ))}
                </>
              ) : null}
            </CardContent>
            {includeCardActions ? (
              <CardActions>
                <Button
                  component={NextLinkComposed}
                  to="/services"
                  endIcon={<ArrowRightAltSharp />}
                >
                  Learn More
                </Button>
              </CardActions>
            ) : null}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesSection;
