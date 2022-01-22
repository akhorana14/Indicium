from gcp_interface import *


# main function
def main():

    # create a gcp_interface object
    gcp = gcp_interface()

    # test all gcp functions

    u = gcp.create_user("jzietek", "pw123")
    print(u)

    

    return 0



# run main function
if __name__ == '__main__':
    main()
