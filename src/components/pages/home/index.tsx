import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { style, COLORS } from './style'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Home() {

    const userName = "Flávio";
    const userLevel = 12;
    const userXP = 70;
    const xpToNextLevel = 100;

    return (
        <View style={style.container}>
            <ScrollView contentContainerStyle={style.contentContainer}>
                
                <View style={style.header}>
                    <View style={style.userProfile}>
                        <View style={style.fotoperfil}></View>
                        <View style={style.nomeNivel}>

                             <Text style={style.welcomeText}>Olá, {userName}</Text>
                        <Text style={style.userLevel}>Nível {userLevel}</Text>

                        </View>
                       
                    </View>
                    <View style={style.xpStatus}>
                        <Text style={style.xpLabel}>Progresso (XP)</Text>
                        <View style={style.xpBarTrack}>
                            <View style={[style.xpBarFill, { width: `${(userXP / xpToNextLevel) * 100}%` }]} />
                        </View>
                        <Text style={style.xpValue}>{userXP} / {xpToNextLevel} XP</Text>
                    </View>
                </View>

                <View>
                    <View style={style.card}>
                        <Text style={style.cardTitle}>Saldo Atual</Text>
                        <Text style={style.balanceAmount}>R$ 4.320,50</Text>
                        <View style={style.financialOverview}>
                            <View style={style.overviewItem}>
                                <Text style={style.overviewLabel}>Receitas (Mês)</Text>
                                <Text style={[style.overviewAmount, style.incomeAmount]}>R$ 7.500,00</Text>
                            </View>
                            <View style={style.overviewItem}>
                                <Text style={style.overviewLabel}>Despesas (Mês)</Text>
                                <Text style={[style.overviewAmount, style.expenseAmount]}>R$ 3.179,50</Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.card}>
                        <Text style={style.cardTitle}>Desafios Ativos</Text>
                        <View style={style.challengeItem}>
                            <FontAwesome name="shopping-cart" size={24} color={COLORS.primary} style={style.challengeIcon} />
                            <View style={style.challengeDetails}>
                                <Text style={style.challengeDescription}>Gastar menos de R$ 500 em "Alimentação"</Text>
                                <View style={style.challengeProgressBar}>
                                    <View style={[style.challengeProgressFill, { width: '80%' }]} />
                                </View>
                                <Text style={style.challengeStatus}>R$ 400,00 / R$ 500,00</Text>
                            </View>
                        </View>
                    </View>

                    <View style={style.card}>
                        <Text style={style.cardTitle}>Transações Recentes</Text>
                        
                        <View style={style.transactionItem}>
                            <View style={[style.transactionIconContainer, style.expenseIconBg]}>
                                <FontAwesome name="cutlery" size={18} color={COLORS.expense} />
                            </View>
                            <View style={style.transactionDetails}>
                                <Text style={style.transactionDescription}>iFood</Text>
                                <Text style={style.transactionCategory}>Alimentação</Text>
                            </View>
                            <Text style={[style.transactionAmount, { color: COLORS.expense }]}>- R$ 89,90</Text>
                        </View>

                        <View style={style.transactionItem}>
                            <View style={[style.transactionIconContainer, style.incomeIconBg]}>
                                <FontAwesome name="dollar" size={18} color={COLORS.income} />
                            </View>
                            <View style={style.transactionDetails}>
                                <Text style={style.transactionDescription}>Salário</Text>
                                <Text style={style.transactionCategory}>Receita Fixa</Text>
                            </View>
                            <Text style={[style.transactionAmount, { color: COLORS.income }]}>+ R$ 7.500,00</Text>
                        </View>

                        <View style={[style.transactionItem, { borderBottomWidth: 0 }]}>
                            <View style={[style.transactionIconContainer, style.expenseIconBg]}>
                                <FontAwesome name="bolt" size={18} color={COLORS.expense} />
                            </View>
                            <View style={style.transactionDetails}>
                                <Text style={style.transactionDescription}>Conta de Luz</Text>
                                <Text style={style.transactionCategory}>Moradia</Text>
                            </View>
                            <Text style={[style.transactionAmount, { color: COLORS.expense }]}>- R$ 240,00</Text>
                        </View>

                    </View>
                </View>

            </ScrollView>

            <TouchableOpacity style={style.fab} onPress={() => { /* Navegar para Adicionar Transação */ }}>
                <FontAwesome name="plus" size={24} color={COLORS.textPrimary} />
            </TouchableOpacity>
        </View>
    );
}