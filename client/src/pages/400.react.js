// @flow

import * as React from "react";

import { Error400Page } from "tabler-react";

type Props = {||};

function Error400(props: Props): React.Node {
  return <Error400Page subtitle="Oops... Você acabou de encontrar uma página de erro..." unknown="Desculpe, mas a página que você solicitou não pode ser encontrada"/>;
}

export default Error400;
