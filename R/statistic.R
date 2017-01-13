rm(list=ls(all=TRUE))
library(readr)
install.packages("devtools")
require(devtools)
install.github('rChart', 'ramnathv')
library("rChart")

dataCountry <- read.csv("C:\\Users\\USER\\Documents\\GitHub\\SALADDAYS\\csv\\all.csv")
view(dataCountry)