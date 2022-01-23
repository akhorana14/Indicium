import gc
from traceback import print_tb
from gcp_interface import gcp_interface


# main function
def main():

    # create a gcp_interface object
    gcp = gcp_interface()

    # test all gcp functions

    #u = gcp.create_user("jzietek", "pw123")
    #print(u)

    #gcp.create_paper(4669, "test", "link", "abstract", 2)

    #print(gcp.get_paper(4796))

    #gcp.make_paper_for_sale(839)
    #gcp.set_all_user_wallets()

    print(gcp.buy_paper(839, 4669))

    

    return 0



# run main function
if __name__ == '__main__':
    main()
