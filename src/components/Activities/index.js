import React from 'react';
import {
  Header,
  Container,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import avatar from '../../images/avatar.png';

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@valmyericles</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Valmy</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider/>
            
            <Feather name="lock" color="#fff" size={14} />
            <Date>2 anos atrás</Date>

          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={16} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
            
            <Option>
              <AntDesign name="hearto" size={16} color="#fff" />
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
};