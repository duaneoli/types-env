# Types-env

A `Types-env` é uma biblioteca para o Node.js que permite tipar e validar as variáveis de ambiente do seu projeto, utilizando o esquema de validação do Joi.

## Instalação

Certifique-se de ter o Node.js instalado em seu sistema. Em seguida, execute o seguinte comando para instalar a biblioteca:

```bash
npm install @duaneoli/types-env
```

ou

```bash
yarn @duaneoli/types-env
```

## Uso

Aqui está um exemplo básico de como usar a biblioteca `Types-env`:

```javascript
import { CreateEnvironment, TypesJoi } from '@duaneoli/types-env'

// Defina o esquema de validação utilizando o Joi
const environmentSchema = {
  ALLOW_ALL_ORIGINS_ON_CORS: TypesJoi.boolean().default(false),
  PORT: TypesJoi.number().default(3000),
}

const ENVIRONMENT = CreateEnvironment(TypesJoi.object(environmentSchema))
export default ENVIRONMENT

// Carregue as variáveis de ambiente e valide-as
import ENVIRONMENT

// Agora você pode acessar as variáveis de ambiente tipadas
console.log(ENVIRONMENT.PORT) // Valor padrão: 3000
console.log(ENVIRONMENT.ALLOW_ALL_ORIGINS_ON_CORS) // Deve ser false
```

## Caso alguma variavel de ambiente esteja faltando o codigo ira executar um process.exit() parando a aplicação

#Recursos
A biblioteca Types-env oferece os seguintes recursos:

- Tipagem e validação de variáveis de ambiente usando o esquema de validação do Joi.
- Valores padrão para variáveis não obrigatórias.
- Facilidade de carregar e acessar as variáveis de ambiente tipadas.
- Alguns objetos de validação padrão.

## Contribuição

Se você deseja contribuir para a biblioteca, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para a sua nova feature (`git checkout -b feature/nova-feature`).
3. Faça commit das suas alterações utilizando o padrão de commit "Git CZ". Para criar um commit, você pode usar o seguinte comando:
   - Utilizando Yarn:
     ```bash
     yarn commit
     ```
   - Utilizando npx:
     ```bash
     npx run commit
     ```
     O padrão "Git CZ" oferece um guia interativo para criar mensagens de commit padronizadas.
4. Faça push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Suporte

Se você tiver algum problema ou dúvida relacionada à biblioteca, abra uma issue no repositório do GitHub.
