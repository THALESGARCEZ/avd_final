import { useState, useEffect } from 'react';
import api from '../../services/api';

import { format } from 'date-fns';

import { Container, Table, Content, LabelStyle, Title } from './styles';

interface clientType {
  id: string;
  description: string;
  invoice_value: number;
  client: string;
  issue_date: Date;
}

export function ListInvoice() {
  const [client, setClient] = useState<clientType[]>([]);

  async function getAPI() {
    const dados = await api.get('/invoice').then((dados) => dados.data);
    if (dados) {
      setClient(dados);
    }
  }

  useEffect(() => {
    getAPI();
  }, []);

  function formatDate(data: Date) {
    return format(new Date(data), 'dd/MMM/yyyyy');
  }

  function calcImposto(nf: number) {
    return nf * 0.11;
  }

  function calcLiquidoNF(nf: number) {
    return nf - nf * 0.11;
  }

  function CalcTotalNF() {
    return client.reduce((t, nf) => (t += nf.invoice_value), 0);
  }

  function TotalNfCliente(cliente: string) {
    return client
      .filter((c) => c.client === cliente)
      .reduce((t, nf) => (t += nf.invoice_value), 0);
  }

  function TotalNFLiquidoCliente(cliente: string) {
    return client
      .filter((c) => c.client === cliente)
      .reduce((t, nf) => (t += calcLiquidoNF(nf.invoice_value)), 0);
  }

  return (
    <Container>
      <Title>Totais</Title>

      <Content>
        <LabelStyle>
          Total do Valor da Nota Fiscal: R$ {CalcTotalNF()}
        </LabelStyle>

        <LabelStyle>
          Total do valor da NF do Cliente ABC: R$ {TotalNfCliente('ABC')}
        </LabelStyle>

        <LabelStyle>
          Total do Valor Liquido da NF do Cliente ABC:
          {TotalNFLiquidoCliente('ABC')}
        </LabelStyle>

        <LabelStyle>
          Total do valor da NF do Cliente XYZ: R$ {TotalNfCliente('XYZ')}
        </LabelStyle>

        <LabelStyle>
          Total do Valor Liquido da NF do Cliente XYZ: R$
          {TotalNFLiquidoCliente('XYZ')}
        </LabelStyle>
      </Content>

      <Title>Listagem de Notas Fiscais</Title>

      <Table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Valor da NF</th>
            <th>Data</th>
            <th>Cliente</th>
            <th>Imposto</th>
            <th>Valor liquido da NF</th>
          </tr>
        </thead>
        <tbody>
          {client.map((item) => (
            <tr key={item.id}>
              <td>{item.description}</td>
              <td>{item.invoice_value}</td>
              <td>{formatDate(item.issue_date)}</td>
              <td>{item.client}</td>
              <td>{calcImposto(item.invoice_value)}</td>
              <td>{calcLiquidoNF(item.invoice_value)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
