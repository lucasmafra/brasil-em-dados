// @flow

import * as React from "react";

import {Error400Page, Error404Page} from "tabler-react";

type Props = {||};

function Error404(props: Props): React.Node {
  return <Error404Page subtitle="Oops... Você acabou de encontrar uma página de erro..." details="Desculpe, mas a página que você solicitou não pode ser encontrada"/>;
}

export default Error404;
