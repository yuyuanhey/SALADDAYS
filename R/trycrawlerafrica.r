rm(list=ls(all.names=TRUE))
library(XML)
library(RCurl)
library(httr)
Sys.setlocale(category = "LC_ALL", locale = "cht")
startNo = 1
endNo   = 19
subPath <- "internationalnewsstation.tw/?paged="
alldata <- data.frame()

#Africa News
area = "Africa"
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=africa", sep='')
  temp    <- getURL(urlPath, encoding = "BIG5")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

#Central America and South America News
area = "Central and South America"
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=central-and-south-america", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

#Europe News
area = "Europe"
endNo = 37
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=europe", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

#USA and Canada News
endNo = 31
area = "USA and Canada"
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=united-states-and-canada", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

#Asian News
endNo = 41
area = "Asian"
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=asia-pacific", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

#cross-strait
endNo = 8
area = "China"
for( pid in startNo:endNo ){
  urlPath <- paste(subPath, pid, "&event_area=cross-strait", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']",xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']",xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(date, area, place, title)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}
write.csv(alldata, file = "C:/Users/test/desktop/news.csv")
