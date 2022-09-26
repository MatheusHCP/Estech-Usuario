import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { IServico } from '../../types/servico';

import {
 Container,
 ImagemServico,
 AreaNomePreco,
 TextoNome,
 AreaMediaPreco,
 TextoDuracao,
 TextoPreco,
} from './styles';

export function CardServicos({data} : {data : IServico}){

    const navigation = useNavigation();

return (
   <Container onPress={() => navigation.navigate('Agendamento')} >
    <ImagemServico source={require("../../../assets/fotobarbearia.png")} />
    <AreaNomePreco>
        <TextoNome numberOfLines={2}>
            {data.descricao}
        </TextoNome>
        <AreaMediaPreco>
            <TextoDuracao>
                Duração média do serviço: {data.tempomedio}
            </TextoDuracao>
            <TextoPreco>
                {data.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </TextoPreco>
        </AreaMediaPreco>
    </AreaNomePreco>
   </Container>
  );
}