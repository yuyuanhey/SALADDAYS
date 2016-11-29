rm(list=ls(all.names=TRUE))
library(XML)
library(RCurl)
library(httr)
Sys.setlocale(category = "LC_ALL", locale = "cht")

startNo = 1
endNo   = 8
subPath <- "http://internationalnewsstation.tw/?paged="
alldata = data.frame()
for( pid in startNo:endNo )
{
  urlPath <- paste(subPath, pid, "&event_area=cross-strait", sep='')
  temp    <- getURL(urlPath, encoding = "UTF-8")
  xmldoc  <- htmlParse(temp)
  title   <- xpathSApply(xmldoc, "//h4[@class='block-title']", xmlValue)
  date    <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-date fright']", xmlValue)
  place   <- xpathSApply(xmldoc, "//p[@class='block-line']/span[@class='block-space fleft']", xmlValue)
  
  Erroresult<- tryCatch({
    subdata <- data.frame(title, date, place)
    alldata <- rbind(alldata, subdata)
  }, warning = function(war) {
    print(paste("MY_WARNING:  ", urlPath))
  }, error = function(err) {
    print(paste("MY_ERROR:  ", urlPath))
  }, finally = {
    print(paste("End Try&Catch", urlPath))
  })
}

write.csv(alldata, file = "C:/Users/a_grazie/Documents/GitHub/news/cross-strait.csv")