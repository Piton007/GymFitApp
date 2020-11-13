import React from 'react';
import {Avatar, Card, Paragraph} from 'react-native-paper';

export interface DeportistaViewModel {
  name: string;
  email: string;
}

const LeftContent = (props: any) => <Avatar.Icon {...props} size={48} icon="account" />;

export default function (props: DeportistaViewModel) {
  return (
    <Card style={{flex: 1}}>
      <Card.Title
        title={props.name}
        left={LeftContent}
        subtitle={props.email}
      />
      <Card.Content>
        <Paragraph style={{fontSize: 18}}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem hic delectus nulla blanditiis, labore excepturi tempore
          quia inventore, consectetur laborum incidunt dolor alias? Dolore,
          impedit veritatis reprehenderit perferendis quibusdam modi?
        </Paragraph>
      </Card.Content>
    </Card>
  );
}
