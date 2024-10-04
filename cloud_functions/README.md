### all the commands was process under WSL UBUNTO 

# Clear local cache
func azure functionapp delete MyFunctionApp

# Navigate to your project directory
cd MyFunctionProj

# Delete the existing function folder
rm -rf HelloWorldFunction

# Create the function again
func new --name HelloWorldFunction --template "HTTP trigger" --authlevel "anonymous"

# Start the function locally
func start

# If needed, run with verbose output
func start --verbose



####  U can find the creation of the function on the code inside this folder 
- function_app.py
- __init__.py
- function.json
- host.json
  