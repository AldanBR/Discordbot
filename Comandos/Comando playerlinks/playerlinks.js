const Discord = require("discord.js")
const fichas = require("../../Dados/fichas.json")
const permition = require("../../Dados/permition.json")



module.exports = {
  name: "playerlinks", // Coloque o nome do comando
  description: "Relação de Links dos personagem(s) do usuário selecionado", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,
  options:[
    {
      name:"usuário",
      description: "selecione um usuário",
      type: Discord.ApplicationCommandOptionType.User,
      required: true,

    }
  ],

  run: async (client, interaction) => {

    let requisitanteCargos = interaction.member.roles.cache.map((x) => x.name);

      if (!requisitanteCargos.includes("Cargo verdinho")){

        let embed_error = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Voce não tem permissão para usar esse comando`)
        .setColor("Random");
        interaction.user.send({ embeds: [embed_error] })
        //interaction.reply({ embeds: [embed_error] })

      }
      else{
        let alvo = interaction.options.getUser("usuário");
        let alvoid = interaction.options.getUser("usuário").id;
        const usuarios = fichas.users.find(x => x.DCid == alvoid)

        let embed_enviado = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Cheque seu privado`)
          .setColor("Random");

        if(!usuarios){

        let embed_error = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Os links deste usuário ainda não foram inseridos na base de dados do bot`)
        .setColor("Random");
        interaction.user.send({ embeds: [embed_error] })
        interaction.reply({ embeds: [embed_enviado] }).then( () => {
          setTimeout( () => {
              interaction.deleteReply()
          }, 3500)})

        }
        else{

 
        let embed_1 = new Discord.EmbedBuilder()
        .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setDescription(`Olá ${interaction.user}. Seguem links da conta principal do usuário ${alvo}:\n
        \n\`Personagem:\` \n${usuarios.Char}\n
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

          if(usuarios.DA){
          let embed_1 = new Discord.EmbedBuilder()
          .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
          .setDescription(`Olá ${interaction.user}. Seguem links da DA do usuário ${alvo}:\n
          \n\`Personagem:\` \n${usuarios.DAChar}\n
          \n\`Ficha:\` \n${usuarios.DAlink}
          \n\`Banco:\` \n ${usuarios.DABank}
          \n\`Gestão de Ficha:\` \n${usuarios.DAGestao}
          \n\`Mod.AG:\` \n${usuarios.DAModAg}
          \n\`RD:\` \n${usuarios.DARd}`)
          .setColor("Random");
          interaction.user.send({ embeds: [embed_1] })

          }
          else{
            let embed_not_DA = new Discord.EmbedBuilder()
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setDescription(`O usuário selecionado não possui DA, ou os dados dela ainda não foram inseridos na base de dados do bot`)
            .setColor("Random");
            interaction.user.send({ embeds: [embed_not_DA] })
          }
        }
      } 
    
  }
}