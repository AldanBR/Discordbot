const Discord = require("discord.js")
const fichas = require("../../Dados/fichas.json")



module.exports = {
  name: "dados", // Coloque o nome do comando
  description: "Relação de Links do seu personagem", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let requisitante = interaction.user.id;

      const usuarios = fichas.users.find(x => x.DCid == requisitante)

      if (!usuarios){

        let embed_enviado = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Cheque seu privado`)
          .setColor("Random");

        let embed_error = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Sua ficha ainda não foi inserida na base de dados do bot`)
        .setColor("Random");
        interaction.user.send({ embeds: [embed_error] })
        interaction.reply({ embeds: [embed_enviado] }).then( () => {
          setTimeout( () => {
              interaction.deleteReply()
          }, 3500)})

      } 

      if(usuarios){

        let embed_enviado = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Cheque seu privado`)
          .setColor("Random");

        let embed_1 = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}. Seguem links do seu personagem ${usuarios.Char}:\n
        \n\`Ficha:\` \n${usuarios.link}
        \n\`Banco:\` \n ${usuarios.Bank}
        \n\`Gestão de Ficha:\` \n${usuarios.Gestao}
        \n\`Mod.AG:\` \n${usuarios.ModAg}
        \n\`RD:\` \n${usuarios.Rd}`)
        .setColor("Random");
        interaction.user.send({ embeds: [embed_1] })
        interaction.reply({ embeds: [embed_enviado] }).then( () => {
          setTimeout( () => {
              interaction.deleteReply()
          }, 3500)})
        

      }
      
      
    /*let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, a melhor vila é \`calculando...\`.`)
    .setColor("Random");

    ${interaction.member.roles.cache.map((x) => x.name)}

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, a melhor vila é claramente Kumogarure PORRA `)
    .setColor("Random");*/

    
  }
}