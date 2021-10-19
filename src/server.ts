import { serverHttp } from "./app";

serverHttp.listen(4000, () => console.log('Opa, funcionou! Server rodando na porta 4000'));