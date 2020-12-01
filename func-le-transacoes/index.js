

module.exports = async function (context, req) {

    context.log('Inicio da Funcao');

 
    context.res = {
        status: 200, 
        body: [{categoria:"Shopping",descricao:"Sapatos Bom Pé",valor:"- R$ 135,00"},
               {categoria:"Supermercado",descricao:"Walmart",valor:"- R$ 89,90"},
               {categoria:"Alimentos e Bebidas",descricao:"Boteco do Ze Alemao",valor:"- R$ 185,90"},
               {categoria:"Pet e Cia",descricao:"Petshop Tosa Legal",valor:"- R$ 65,90"},
               {categoria:"Automovel",descricao:"Lava a Jato Agua Morna",valor:"- R$ 50,00"},
               {categoria:"Shopping",descricao:"Roupas do Papai Noel",valor:"- R$ 50,00"}]
    };
}