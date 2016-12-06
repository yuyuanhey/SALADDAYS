library(XLConnect)

mydata <- read.csv("all.csv")
num <- nrow(mydata)
USA = 0
China = 0
for(i in 1:num){
  if(mydata[i,3] == "Africa"){
    #print("Africa")
  }
  else if(mydata[i,3] == "Central and South America"){
    #print("Central")
  }
  else if(mydata[i,3] == "Europe"){
    #print("Europe")
  }
  else if(mydata[i,3] == "USA and Canada"){
    #print("USA and C")
    if(mydata[i,4] == "美國"){
      USA = USA + 1
    }
  }
  else if(mydata[i,3] == "Asian"){
    #print("Asian")
  }
  else if(mydata[i,3] == "Cross-strait"){
    #print("Cross")
    if(mydata[i,4] == "中國"){
      China = China + 1
    }
  }
}

print(USA)
print(China)
