const Discord = require("discord.js")

module.exports = {
  name: "ticket", // Coloque o nome do comando
  description: "Abra o painel de tickets neste canal.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let requisitanteCargos = interaction.member.roles.cache.map((x) => x.id);

    if (!requisitanteCargos.includes("1021168380625027162")) {
        interaction.reply({ content: `Você não possui permissão para utilzar este comando!`, ephemeral: true })
    } else {
        let embed = new Discord.EmbedBuilder()
        .setColor("Random")
        .setAuthor({ name: interaction.guild.name, iconURL: interaction.guild.iconURL({ dynamic: true }) })
        .setDescription(`Abra um ticket aqui no servidor selecionando uma das opções abaixo:`);

        let painel = new Discord.ActionRowBuilder().addComponents(
            new Discord.SelectMenuBuilder()
            .setCustomId("painel_ticket")
            .setPlaceholder("Clique aqui!")
            .addOptions(
                {
                    label: "Duvidas Rapidas",
                    description: "Abra um ticket para tirar dúvidas rápidas sobre o fórum.",
                    value: "opc1"
                },
                {
                    label: "Denuncias",
                    description: "Abra um ticket para denunciar alguma má fé que tenha testemunhado.",
                    value: "opc2"
                },
                {
                    label: "Reclamações",
                    description: "Abra um ticket para acusar algum problema que esteja vendo no fórum ou no discord.",
                    value: "opc3"
                },
                {
                    label: "Doações",
                    description: "Abra um ticket para trazer uma dúvida relacionada a doações.",
                    value: "opc4"
                },
                {
                    label: "Pedido atrasado",
                    description: "Abra um ticket para caso esteja com alguma pendencia atrasada(como GF, RD, Narrações ou Avaliações).",
                    value: "opc5"
                },
                {
                    label: "Solicitar cargo de vila",
                    description: "Abra um chamado para ganhar a cor da sua vila.",
                    value: "opc6"
                }
            )
        );

        interaction.user.send({ content: `✅ Painel de Tickets aberto com sucesso!`, ephemeral: true })
        interaction.channel.send({ embeds: [embed], components: [painel] })
    }


  }
}