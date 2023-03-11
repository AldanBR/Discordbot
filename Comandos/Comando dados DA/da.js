const Discord = require("discord.js")
const fichas = require("../../Dados/fichas.json")



module.exports = {
  name: "dadosda", // Coloque o nome do comando
  description: "Relação de Links da sua DA.", // Coloque a descrição do comando
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
        .setDescription(`Seu banco de dados ainda não foi inserida na base de dados do bot`)
        .setColor("Random");
        interaction.user.send({ embeds: [embed_error] })
        interaction.reply({ embeds: [embed_enviado] }).then( () => {
          setTimeout( () => {
              interaction.deleteReply()
          }, 3500)})
        interaction.user.send({ embeds: [embed_error] })
        
      } 

      if(usuarios){

        let embed_enviado = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Cheque seu privado`)
          .setColor("Random");

        if(usuarios.DA){
          let embed_1 = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Seguem links do seu personagem ${usuarios.DAChar}:\n
          \n\`Ficha:\` \n${usuarios.DAlink}
          \n\`Banco:\` \n ${usuarios.DABank}
          \n\`Gestão de Ficha:\` \n${usuarios.DAGestao}
          \n\`Mod.AG:\` \n${usuarios.DAModAg}
          \n\`RD:\` \n${usuarios.DARd}
          ${interaction.member.roles.cache.map((x) => x.name)}`)
          .setColor("Random");
          interaction.user.send({ embeds: [embed_1] })
          interaction.reply({ embeds: [embed_enviado] }).then( () => {
            setTimeout( () => {
                interaction.deleteReply()
            }, 3500)})
        }

        if(!usuarios.DA){
          let embed_not_found = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Nenhuma DA sua foi cadastrada na base da dados do bot`)
          .setColor("Random");
          interaction.user.send({ embeds: [embed_not_found] })
          interaction.reply({ embeds: [embed_enviado] }).then( () => {
            setTimeout( () => {
                interaction.deleteReply()
            }, 3500)})
        }

      }
      
     
    /*let embed_1 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, a melhor vila é \`calculando...\`.`)
    .setColor("Random");

    let embed_2 = new Discord.EmbedBuilder()
    .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
    .setDescription(`Olá ${interaction.user}, a melhor vila é claramente Kumogarure PORRA `)
    .setColor("Random");*/

    
  }
}