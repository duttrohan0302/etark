<<<<<<< HEAD
# Documentation for ETark assignment
## Basic Backend Auth

### Running the App
#### Create a .env file in the root folder with the following content
MONGOURI = "Enter your mongodb URI here"
SECRETORKEY = "Enter the unique secretOrKey for JWT" 

Now, in the root directory, run 
##### npm install
Then run
##### npm run dev

=======
## Routes

### USER Routes

1. Create/Signup User
  @type    POST
  @route   /register
  @desc    Register the user
  @access  Public

2. Login User
  @type    POST
  @route   /login
  @desc    Register the user
  @access  Public

3. Get Current user 
  @type    GET 
  @route   /home
  @desc    Get current user(from JWT and Passport Auth)
  @access  Private
